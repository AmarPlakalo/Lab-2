// To get the program running, open the apiQ2HTML.html file and go inspect element and then console. It should show the console logs

async function list_titles_and_word_frequency() 
{
    try
	{
		// First line : Fetching the API so I can get the information that I need
		// Second Line : Parsing the result as JSON
		
        const api_response = await fetch("http://jsonplaceholder.typicode.com/posts")
        let all_posts = await api_response.json();
		
		// Creating a map that will store the key (word) and the value (frequency)
		let frequency_map = {};
		
		// Third Line : Get all the titles in the post so I can then filter them
		
        let post_titles = all_posts.map(all_posts => all_posts.title);
		
		console.log("\nLIST OF ALL TITLES THAT ARE GREATER THAN 6\n");
		
		// Rest of the Lines : Filter the post titles that have more than 6 words
		
		let list_of_titles_more_than_six = post_titles
		.filter(post_titles => post_titles.split(' ').length > 6)
		.forEach(list_of_titles_more_than_six => console.log("- " + list_of_titles_more_than_six + "\n"));
		
		// The following block of code goes through the map and checks whether the word is in the frequency map. If it is
		// you can increase the frequency value by 1. If it is not in the map, make the value equal to 1
		
        let post_bodies = all_posts.map(all_posts => all_posts.body);

		post_bodies.map(post_bodies => post_bodies.split(" ").map(word => word.replace("\n"," ")).map(word => {
			
            if(word in frequency_map)
			{
                frequency_map[word]++;
            }
            else
			{
                frequency_map[word] = 1;
            }
		}
        ));
		
		console.log("\nWORD FREQUENCY LIST\n");
		
		// Need to iterate through the keys in the map so that you can show the word(key) and the frequency(value) for each one
		
        let keys_in_frequency_map = Object.keys(frequency_map);
        keys_in_frequency_map.forEach(key => console.log(key + " : " + frequency_map[key]));
		
    }
	
	catch (e) 
	{
        console.log(e);
    }
}

// Calling function here

list_titles_and_word_frequency();
