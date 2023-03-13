const amqp = require('amqplib');

async function setup() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queueName = 'sprint3_pubSub';

  await channel.assertQueue(queueName, { durable: false });

  setInterval(() => {
    const message = `Message sent at ${new Date().toLocaleString()}`;
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Sent message: ${message}`);
  }, 1000);
}

setup();