// To get the program running, open the apiQ2HTML.html file and go inspect element and then console. It should show the console logs

async function list_titles_and_word_frequency() 
{
    try
	{
		// First line : Fetching the API so I can get the information that I need
		// Second Line : Parsing the result as JSON
		
    const api_response = await fetch("http://jsonplaceholder.typicode.com/posts")
    let all_posts = await api_response.json();
		
		// Third Line : Get all the titles in the post so I can then filter them
		
    let post_titles = all_posts.map(all_posts => all_posts.title);
		
		console.log("\nLIST OF ALL TITLES THAT ARE GREATER THAN 6\n");
		
		// Rest of the Lines : Filter the post titles that have more than 6 words
		
		let list_of_titles_more_than_six = post_titles
		.filter(post_titles => post_titles.split(' ').length > 6)
		.forEach(list_of_titles_more_than_six => console.log("- " + list_of_titles_more_than_six + "\n"));
		
    let post_bodies = all_posts.map(all_posts => all_posts.body);
		
 }
	
	catch (e) 
	{
    console.log(e);
  }
}

// Calling function here

list_titles_and_word_frequency();
