import DrinksList from "../component/DrinksList";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c";

const fetchDrinks = async () => {
	// wait for 2 seconds until the promise is resolved.
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch(url);

	// Error
	if (!response.ok) {
		throw new Error(`Failed to fetch the drinks`);
	}
	const data = await response.json();
	return data;
};

const ServerComponent = async () => {
	const data = await fetchDrinks();
	// console.log(data);
	return (
		<div className="">
			<DrinksList data={data}></DrinksList>
		</div>
	);
};
export default ServerComponent;
