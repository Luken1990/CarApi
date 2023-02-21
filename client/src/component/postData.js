//an asynchronous function with two parameter url and option object
//returns a fetch method which takes in a url and object
//return a json response
const postData = async (url = '', optionsObj = null) => {
  return await fetch(url, optionsObj).then((response) => response.json());
};

export default postData;
