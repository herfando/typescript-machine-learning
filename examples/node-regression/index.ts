import * as tf from "@tensorflow/tfjs-node";

// Dataset sederhana (x → y = 2x - 1)
const xs = tf.tensor1d([1, 2, 3, 4, 5]);
const ys = tf.tensor1d([1, 3, 5, 7, 9]);

// Model sederhana: 1 input → 1 output
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({
  optimizer: "sgd",
  loss: "meanSquaredError"
});

async function train() {
  console.log("Training model...");
  await model.fit(xs, ys, { epochs: 200 });

  console.log("Training selesai ✅");

  // Prediksi nilai baru
  const output = model.predict(tf.tensor2d([6], [1, 1])) as tf.Tensor;
  output.print(); // Harusnya ~ 11 (karena y = 2x - 1)
}

train();
