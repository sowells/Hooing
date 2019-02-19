export const menuCategories = [
    {
      name: "NEW ARRIVALS",
      items: [{name:"ALL",url:"/all-new"}, {name: "김후잉",url:"/kimHooing"}, {name:"성후잉",url:"/sungHooing"}]
    },
    {
      name: "DRESSES",
      items: [{name:"ALL",url:"/all-dresses"},{name:"색동저고리",url:"/hanBook"},{name:"오색저고리",url:"/jeogori"}]
    },
    {
      name: "JEANS",
      items: [{name:"ALL",url:"/all-jeans"},{name:"요가팬츠",url:"/yoga"},{name:"스키니진",url:"/skinny"}]
    }
  ]

export function getRandomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

export function createRandomItems(category) {
    const count = getRandomNumber(15,25)
    const keywords = ["Abecrombie", "PoloRaplhLauren", "Nike", "Adidas", "Puma"]
    var result = []
    for(var i=0; i<count; ++i) {
      let name = keywords[getRandomNumber(0,keywords.length-1)]
      result.push({name:category + "-" + name})
    }
    return result 
}