/*

  This Publish/Subscribe Implementation was adapted from the one made by Addy Osmani:
  https://twitter.com/addyosmani

  You can find it at:
  https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript

*/

const pubsub = (() => {
  const events = {};

  let subscribersId = -1;

  function publish(event, data) {
    if (!events[event]) {
      return false;
    }

    const subscribers = events[event];
    subscribers.forEach((subscriber) => {
      subscriber.func(event, data);
    });
    return true; // this
  }

  function subscribe(event, func) {
    if (!events[event]) {
      events[event] = [];
    }

    subscribersId = +1;
    const token = subscribersId.toString();
    events[event].push({
      token,
      func,
    });
    return token;
  }

  function unsubscribe(token) {
    const found = events.keys.some((event) => events[event].some((subscriber, index) => {
      const areEqual = subscriber.token === token.toString();
      if (areEqual) {
        events[event].splice(index, 1);
      }
      return areEqual;
    }));

    return found ? token : null; // this
  }

  return {
    publish,
    subscribe,
    unsubscribe,
  };
})();

export default pubsub;