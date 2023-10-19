interface IProps {
  links: string[];
}

function ArticleNavbar({ links }: IProps) {
  return (
    <div className="w-full bg-white shadow-md sticky top-[70px]">
        <ul className="max-w-[1200px] mx-auto flex items-center justify-center text-primary">
          {links.map((item, index) => {
            return (
              <li key={index} className="rounded-sm hover:bg-hover w-full max-w-[172px] text-center text-fs-200">
                <a className="px-3 py-4 block" href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default ArticleNavbar;
