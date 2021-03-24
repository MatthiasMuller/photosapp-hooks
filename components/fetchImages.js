import {Constants, ImageConstants} from "./Constants";


export default async function fetchImages(page, searchquery, amount) {
    try {
        let response = await fetch(
            `https://api.pexels.com/v1/search?query=${searchquery}&per_page=${amount * 6}&page=${page.toString()}`,
            {
                headers: {
                    Authorization: ""
                }
            }
        );
        console.log("PAG:" + page)
        let responsejson = await response.json();
        if (responsejson.error === "Rate limit exceeded") {
            console.log("ERROR: Rate limit exceeded")
            return []
        }
        if (responsejson.status === 400) {
            return []
        }
        return responsejson.photos.map((imageData) => (
            {
                "url": imageData.src[Constants.imageSize],
                "bigurl": imageData.src.original,
                "photographer": imageData.photographer,
                "avg_color": imageData.avg_color,
                "ratio": imageData.width / imageData.height
            }
        ))
    } catch (error) {
        console.error(error);
        return ""
    }
}
