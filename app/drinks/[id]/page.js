const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import { sign } from "crypto";
import { get } from "http";
import Image from "next/image";
import Link from "next/link";

const getSingleDrink = async (params) => {
	const response = await fetch(`${url}${params.id}`);
	if (!response.ok) {
		throw new Error(`Data could not be fetched.`);
	}
	const data = await response.json();
	return data;
};

const page = async ({ params }) => {
	const data = await getSingleDrink(params);
	return (
		<div>
			<Link href="/drinks" className="btn btn-primary py-2 px-2 mb-4 text-2xl">
				back to coffee
			</Link>
			{data.drinks.map((drink) => {
				const { idDrink: id, strDrink: name, strDrinkThumb: imgSrc } = drink;
				return (
					<article key={id}>
						<h1 className="text-2xl mb-8 text-red-700">{name}</h1>
						<div className="h-80 relative">
							<Image
								src={imgSrc}
								sizes="(max-width:768px) 100vw, (max-width:1500px) 50vw"
								className="object-cover rounded-lg w-58 h-58 shadow-lg"
								width={420}
								height={320}></Image>
						</div>
					</article>
				);
			})}
		</div>
	);
};
export default page;
