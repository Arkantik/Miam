import styleBadgeCategory from "../helper/styleBadgeCategory";

export default function Badge({ categoryName }) {
  const customStyle = styleBadgeCategory(categoryName);

  return (
    <li className={`rounded-[20px] px-2 py-0.5 ${customStyle}`}>
      {categoryName}
    </li>
  );
}
