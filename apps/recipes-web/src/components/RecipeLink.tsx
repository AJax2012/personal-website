import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { urlFor } from "src/lib/SanityUi";
import { DisplayTime, RecipeListItem } from "ui";

export interface RecipeLinkProps {
  recipe: RecipeListItem;
  closeSidebar: () => void;
}

const RecipeLink = ({
  recipe,
  closeSidebar,
}: RecipeLinkProps): ReactElement => {
  return (
    <div className="my-4">
      <Link href={{ pathname: "/[slug]", query: { slug: recipe.slug } }}>
        <a className="flex" onClick={closeSidebar}>
          <div className="inline-block mr-3">
            {recipe.image && (
              <Image
                alt={recipe.title}
                width="60"
                height="60"
                src={urlFor(recipe.image)
                  .width(60)
                  .height(60)
                  .auto("format")
                  .url()}
              />
            )}
          </div>
          <div className="inline-block">
            <div className="block">
              <div className="text-xl font-normal text-black flex-1 overflow-ellipsis prose dark:prose-dark">
                {recipe.title}
              </div>
              <div className="text-sm prose text-slate-400">
                Time to make:{" "}
                <DisplayTime minutes={recipe.cookTime + recipe.prepTime} />
                {recipe.restTime && <> (Rest: {recipe.restTime})</>}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RecipeLink;