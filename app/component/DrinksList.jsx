import Link from "next/link";
import Image from "next/image";
const DrinksList = ({ data }) => {
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
			{data.drinks.map((drink) => {
				const { idDrink: id, strDrink: name, strDrinkThumb: imgSrc } = drink;
				return (
					<Link
						key={id}
						href={`drinks/${id}`}
						className="mb-8 block text-red-800  hover:text-red-600">
						<div className="h-80 relative mb-4">
							<Image src={imgSrc} alt={name} width={500} height={520}></Image>
							<h1 className="text-2xl mt-2">{name}</h1>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default DrinksList;
