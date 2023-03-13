const amqp = require('amqplib');

async function setup() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queueName = 'sprint3_pubSub';

  await channel.assertQueue(queueName, { durable: false });

  console.log(`Waiting for messages in ${queueName}`);

  channel.consume(queueName, (message) => {
    console.log(`Received message: ${message.content.toString()}`);
  }, { noAck: true });
}

setup();