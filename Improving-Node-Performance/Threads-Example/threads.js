const { 
    isMainThread, 
    Worker,
    workerData
 } = require("worker_threads");

if (isMainThread) {
  console.log(`Main process ID ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
  new Worker(__filename, {
    workerData: [1, 2, 4, 3],
  });
} else {
  console.log(`'Worker' proccess ID: ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
