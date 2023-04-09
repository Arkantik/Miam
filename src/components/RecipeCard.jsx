export default function RecipeCard() {
  return (
    <div className="relative bg-lightmode rounded-xl drop-shadow w-[180px]">
      <img
        className="object-cover object-center w-full h-[120px] rounded-t-xl"
        src="/public/assets/img/burger.jpg"
        alt="burger"
      />
      <div className="space-y-2 px-3 pt-1.5 pb-4">
        <div>
          <p className="text-dark text-base">Brut Butcher</p>
          <p className="text-xs text-dark25">Double steacks</p>
          <ul className="flex items-center gap-1 text-xs my-1">
            <li className="card-grp bg-secondary text-accent">American</li>
            <li className="card-grp bg-[#E7EDE3] text-[#6C9E50]">Fast-food</li>
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
              <p className="text-xs text-dark25">4-6</p>
            </span>
            <span className="flex gap-1 ">
              <img
                className=""
                src="/public/assets/icon/hourglass.svg"
                alt="Amount of people"
              />
              <p className="text-xs text-dark25">30min</p>
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
