// 1.Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time

async function logMessageWithDelay(message, delayInMilliseconds) {
  await new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
  console.log(message);
}
logMessageWithDelay("I love AkiraChix",2000);



// 2. You have an array of user IDs and a function getUserData(id) that returns a Promise with user data
 //when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID 
 //one by one, in sequence.
 async function fetchAndLogUserDataInSequence(userIDs) {
    for (const id of userIDs) {
      try {
        const userData = await userData(id);
        console.log(`User data for ID ${id}:`, userData);
      } catch (error) {
        console.error(`There was an error fetching data for ID ${id}:`, error);  
      }
    }
  }
  
  const userIDs = [167,168,170,171];
  fetchAndLogUserDataInSequence(userIDs);



//3. You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task
// is successful and rejects if there's an error. Write a function that calls performTask() and logs a 
//custom success message if the task is successful, and a custom error message if there's an error.

async function performTask(){
  
    return new Promise(resolve => { 
        setTimeout(() => { resolve('1000') }, millisec); 
    }) 
 
}

async function handleTask() {
  try {
      await performTask(task);
      console.log("The task completed successfully");
  } catch (error) {
      console.error(`Error occurred: ${error.message}`);
  }
}
handleTask();


//  4. Retry Logic:
//Scenario:

//2. Returns a Promise that:
//Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
//Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
//Write another function executeWithRetry that:

//Accepts a taskName, retries, and failureProbability.
//Uses a retry mechanism to attempt the unstableTask up to retries times.
//Logs whether the task succeeded or failed after all attempts.

//Write a function unstableTask that:
//1.Accepts a taskName and failureProbability (a number between 0 and 1).
function unstableTask(taskName, failureProbability) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if ( randomNumber> failureProbability) {
      resolve(`The Task "${taskName}" succeeded`);
    } else {
      reject(new Error(`The Task "${taskName}" failed`));
    }
  });
}
async function executeWithRetry(taskName, retries, failureProbability) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await unstableTask(taskName, failureProbability);
      console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
      return;
    } catch (error) {
      console.error(`Attempt ${attempt}: ${error.message}`);
    }
  }
  console.log(`All ${retries} attempts failed for task "${taskName}"`);
}
executeWithRetry('Data Processing', 3, 0.3);







