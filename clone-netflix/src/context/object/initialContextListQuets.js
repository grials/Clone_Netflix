import SpanishHomejson from "../../constants/Languege/Spanish/textSpanishHome.json";

const listQuest = {};

for (let index = 0; index < SpanishHomejson.cardFag.listQuest.length; index++) {
  listQuest[`quest${1 + index}`] = false;
}

export default listQuest;
