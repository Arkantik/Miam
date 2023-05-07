/**
 * Define a unique and custom CSS styling for each recipe category
 * @param {*} categoryName should match the names used to categorize the recipes
 * @returns custom and unique CSS styling for each recipe category
 */

function styleBadgeCategory(categoryName = "") {
  let customCSS = "";

  switch (categoryName) {
    case "Asian":
      customCSS = "bg-neutral text-[#BD9C1F]";
      break;
    case "Breakfast":
      customCSS = "bg-[#B6DFF0] text-[#00609C]";
      break;
    case "Desert":
      customCSS = "bg-[#F7DFFF] text-[#C584E9]";
      break;
    case "Diner":
      customCSS = "bg-[#F0D8B6] text-[#BC6D00]";
      break;
    case "Italian":
      customCSS = "bg-neutral text-accent";
      break;
    case "Lunch":
      customCSS = "bg-secondary text-accent";
      break;
    case "Meat":
      customCSS = "bg-secondary text-accent";
      break;
    case "Pastry":
      customCSS = "bg-[#FFF3BF] text-[#C79D0B]";
      break;
    case "Vegan":
      customCSS = "bg-[#E7EDE3] text-[#6C9E50]";
      break;
    default:
      customCSS = "bg-neutral text-darkmode";
  }

  return customCSS;
}

export default styleBadgeCategory;
