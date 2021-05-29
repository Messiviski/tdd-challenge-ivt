import nock from "nock";
import axios from "axios";
import sumFunction from "../sumFunction";

describe("Test Driven Development", () => {

  describe("Sum tests", () => {
    it("should be able to sum 1 + 1", () => {
      expect(sumFunction(1, 1)).toBe(2);
    })

    it("should be able to return the sum of two values", () => {
      expect(sumFunction(1, 1)).toBe(2);
      expect(sumFunction(2, 2)).toBe(4);
      expect(sumFunction(4, 5)).toBe(9);
      expect(sumFunction(6, 7)).toBe(13);
      expect(sumFunction(9, 9)).toBe(18);
    })
  })

  it("should be able to verify if the number is not equal to 7", () => {
    expect(6).not.toBe(7)
  })

  it("should be able to verify if the number 3 is inside the array", () => {
    const testArray = [1, 2, 3, 4, 5];

    expect(testArray).toContain(3);
  })

  it("should be able to verify if \"TDD é TOP\" is not inside the array", () => {
    const testArray = [6, 7, 8, 9];
    const testText = "TDD é top"

    expect(testArray).not.toContain(testText);
  })

  it("should be able to verify if the object has the attribute \"attr1\"", () => {
    const testObject = { attr1: 13 }
    
    expect(testObject).toHaveProperty("attr1");
  })

  it("should be able to verify if the object does not have the attribute \"attr1\"", () => {
    const testObject = { attr3: 13 }
    
    expect(testObject).not.toHaveProperty("attr1");
  })

  it("should be able to verify if an array of phrases contains the word \"Investtools\"", () => {
    const phrasesArray = [];
    
    phrasesArray.push("Não existe concorrente com a investtools para a melhor empresa para se estagiar");
    phrasesArray.push("Investtools cuida melhor dos seus estagiários que a bloomberg");
    phrasesArray.push("Somos parte do Programa de Formação da Investtools");
    
    expect(phrasesArray[0]).toMatch(/[Invesstools]/);
    expect(phrasesArray[1]).toMatch(/[Invesstools]/);
    expect(phrasesArray[2]).toMatch(/[Invesstools]/);
  })

  it("should be able to make a request to google.com", async () => {
    let testResponse;

    await axios.get("http://www.google.com.br/").then(response => {
      testResponse = response.data;
    })

    expect(testResponse).toMatch(/\<body.*\>/)
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

    expect(testResponse).toMatch(/\<body\>/);
  })
})