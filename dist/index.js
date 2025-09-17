import * as tf from "@tensorflow/tfjs";
// dataset dummy
const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);
async function run() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ optimizer: "sgd", loss: "meanSquaredError" });
    await model.fit(xs, ys, { epochs: 200 });
    const output = model.predict(tf.tensor2d([[5]], [1, 1]));
    output.print(); // perkiraan ~9
}
run();
