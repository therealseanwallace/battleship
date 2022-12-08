class Topic {
  constructor(topic) {
    this.subscribers = [];
  }
}

export default class PubSub {
  constructor() {
    this.topics = {};
  }

  sub(topic, subscriber) {
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for subscribers`;
    }
    this[topic] = new Topic;
    this[topic].subscribers.push(subscriber);
  }

  unsub(topic, subscriber) {
    if (typeof subscriber !== "function") {
      return `${typeof subscriber} is not a valid argument for unsubscribing`;
    }
    if (this[topic].subscribers.includes(subscriber)) {
      this[topic].subscribers = this[topic].subscribers.filter(
        (sub) => sub !== subscriber
      );
    }
  }

  pub(topic, payload) {
    console.log('pub!')
    this[topic].subscribers.forEach((sub) => sub(payload));
  }

  returnSubscribers(topic) {
    const result = [];
    this[topic].subscribers.forEach((sub) => result.push(sub));
    return result;
  }
}
