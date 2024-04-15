const commands ={
	/* define each command as an object, with type either text or link, value being what is returned in the output, and context sets the state for further nested commands */
	help: () => ({ /* if user types help, display list of commands */
		type: "text", /* type is either text or link. Add new types in terminal.jsx file */
		value: /* value is what is returned in the output */
			"Available commands: \b\n" + 
			"'websites' - List of Websites I build in recent years \b\n" +
			"'hi' - say hello to Yubraj \b\n" +
			"'clear' - clear the terminal \b\n" +
			"'socials' - view a list of all social media accounts \b\n" + 
			"'about' - learn more about Yubraj  \b\n" +
			"'contact' - send me an email \b\n"
		/* !todo	"'more commands", */
		}),
	about: () => ({ type: "text", value: "Hi! My name is Yubraj Khatri, I'm 20 a year old , web developer, and a Big Noob!. \b\n" + 

		"I'm a full stack web developer, and I'm currently just learning  \n,working on lot of new projects while mastering   javascript and seeking Jobs. \b\n" + 
		"When I'm not coding, I love watching  movies,and think will Ai take my job? \b\n",
	}),
	hi: () => ({ type: "text", value: "Hello! :) Thanks for visit the site",}),

	contact: () => ({ type: "link", value: "yubrajkhatri977@gmail.com",}),
	websites: () => ({
		type: "text",
		value: "What website would you like to visit: \b\n" +
		"'portfolio' - My personal portfolio site \b\n" +
		"'movie' - My movie downloading site \b\n" +
		"'Blog' - My personal Blog-site \b\n" /* !todo +
		"website3" */,
		context: "websites",
	}),
	socials: () => ({
		type: "text",
		value: "What social media account would you like to visit: \b\n" +
		"'github' ---- Yubraj github account \b\n" +
		"'linkedin' ---- Yubraj linkedin account \b\n" +
		"'instagram' ---- Yubraj instagram account \b\n" +
		"'facebook' ---- Yubraj facebook account \b\n" ,
		context: "socials",

	}),
	clear: () => ({ type: "clear",}), /* clear performs a window reload, and has no output */
}


const websiteCommands = { /* each nested command is defined in the same way as the parent command */
	portfolio: () => ({ type: "link", value: "https://www.yubrajkhatri.com.np/",}),
	Blog: () => ({ type: "link", value: "https://medium.com/@yubrajkhatri977",}),
	movie: () => ({ type: "link", value: "https://www.ymshub.xyz/",}),
	
}

const socialsCommands = { 
	github: () => ({ type: "link", value: "https://github.com/Yubraj977",}),
	linkedin: () => ({ type: "link", value: "https://www.linkedin.com/in/yubraj-khatri-155786243/",}),
	instagram: () => ({ type: "link", value: "https://www.instagram.com/yubrajkhatri007/",}),
	facebook: () => ({ type: "link", value: "https://www.facebook.com/",}),
}

export default  commands;
export { websiteCommands, socialsCommands};