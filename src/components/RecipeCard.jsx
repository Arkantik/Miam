export default function RecipeCard({
  src,
  alt,
  name,
  description,
  category,
  serving,
  time,
  rating,
  favorite,
}) {
  return (
    <div className="relative bg-lightmode dark:bg-dark text-dark dark:text-neutral rounded-xl drop-shadow w-[180px]">
      <img
        className="object-cover object-center w-full max-h-[120px] rounded-t-xl"
        src={src}
        alt={alt}
      />
      <div className="space-y-2 px-3 pt-1.5 pb-4">
        <div>
          <p className="text-dark dark:text-neutral text-base">{name}</p>
          <p className="text-xs text-dark25 dark:text-neutral/50">
            {description}
          </p>
          <ul className="flex items-center gap-1 text-xs my-1">
            <li className="card-grp bg-secondary text-accent">{category[0]}</li>
            <li className="card-grp bg-[#E7EDE3] text-[#6C9E50]">
              {category[1]}
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="flex gap-1 ">
              <img
                className=""
                src="/public/assets/icon/user-group.svg"
                alt="Amount of people"
              />
              <p className="text-xs text-dark25 dark:text-neutral/50">
                {serving}
              </p>
            </span>
            <span className="flex gap-1 ">
              <img
                className=""
                src="/public/assets/icon/hourglass.svg"
                alt="Amount of people"
              />
              <p className="text-xs text-dark25 dark:text-neutral/50">{time}</p>
            </span>
          </div>
          <div className="flex justify-start gap-x-1.5">
            <img className="" src="/public/assets/icon/hat.svg" alt="Rating" />
            <img className="" src="/public/assets/icon/hat.svg" alt="Rating" />
            <img className="" src="/public/assets/icon/hat.svg" alt="Rating" />
            <img className="" src="/public/assets/icon/hat.svg" alt="Rating" />
            <img className="" src="/public/assets/icon/hat.svg" alt="Rating" />
          </div>
        </div>
      </div>

      <button className="absolute -right-1 bottom-3 ">
        <img src="public/assets/icon/bookmarked.svg" alt="Favorite" />
      </button>
    </div>
  );
}

// bg-lightmode dark:bg-darkmode text-dark dark:text-neutral
