import { assert } from "chai";
import axios from "axios";
import sumFunction from "../sumFunction.js";
import nock from "nock";

describe("Test Driven Development", () => {

  describe("Sum tests", () => {
    it("should be able to sum 1 + 1", () => {  
      assert.equal(sumFunction(1, 1), 2)
    })

    it("should be able to return the sum of two values", () => {
      assert.equal(sumFunction(1, 1), 2);
      assert.equal(sumFunction(2, 2), 4);
      assert.equal(sumFunction(4, 5), 9);
      assert.equal(sumFunction(6, 7), 13);
      assert.equal(sumFunction(9, 9), 18);
    })
  })

  it("should be able to verify if the number is not equal to 7", () => {
    assert.notEqual(6, 7);
  })

  it("should be able to verify if the number 3 is inside the array", () => {
    const testArray = [1, 2, 3, 4, 5];

    assert.include(testArray, 3)
  })

  it("should be able to verify if \"TDD é TOP\" is not inside the array", () => {
    const testArray = [6, 7, 8, 9];
    const testText = "TDD é top"

    assert.notInclude(testArray, testText);
  })

  it("should be able to verify if the object has the attribute \"attr1\"", () => {
    const testObject = { attr1: 13 }
    
    assert.property(testObject, "attr1");
  })

  it("should be able to verify if the object does not have the attribute \"attr1\"", () => {
    const testObject = { attr3: 13 }
    
    assert.notProperty(testObject, "attr1");
  })

  it("should be able to verify if an array of phrases contains the word \"Investtools\"", () => {
    const phrasesArray = [];
    
    phrasesArray.push("Não existe concorrente com a investtools para a melhor empresa para se estagiar");
    phrasesArray.push("Investtools cuida melhor dos seus estagiários que a bloomberg");
    phrasesArray.push("Somos parte do Programa de Formação da Investtools");
    
    assert.match(phrasesArray[0], /[Invesstools]/)
    assert.match(phrasesArray[1], /[Invesstools]/)
    assert.match(phrasesArray[2], /[Invesstools]/)
  })

  it("should be able to make a request to google.com", async () => {
    let testResponse;

    await axios.get("http://www.google.com.br/").then(response => {
      testResponse = response.data;
    })

    assert.match(testResponse, /\<body.*\>/)
  })

  it("should be able to make a request to google.com in less than 100ms", async () => {
    let testResponse;

    nock("http://www.google.com.br")
      .get("/")
      .reply(200, 
        `
          <html>
            <head></head>
            <body></body>
          </html>
        `
      )

    await axios.get("http://www.google.com.br/").then((response) => {
      testResponse = response.data;
    })

    assert.match(testResponse, /\<body\>/)
  })
})