// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from "enzyme";
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const localStorageMock = (function localStorageMock() {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(global, "localStorage", {
  value: localStorageMock
});

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});
