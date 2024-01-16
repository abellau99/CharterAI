// This is a public open source API that only returns SVG logos, refer to https://github.com/kevinwuhoo/vector-logos-figma-plugin/blob/master/ui.html
// It pulls info from Wiki, Github, VectorWiki, WorldVectorLogo, IconApe, Logo.Fandom, LogoWiki, LogoWine, Gitlab
// This API gives a very extensive list of logo with multiple variants but low quality search 

export const fetchVectorlogoLogo = async (searchValue: string): Promise<any[]> => {
    // Fetch data from API based on the searchValue
    const response = await fetch(`https://vector-logos-figma-plugin-api.vercel.app/api/search?query=${searchValue}`);
    const data = await response.json();
    return data; 
  };


/* This is the sample response 
{
  "results": [
    {
      "url": "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/youtubetv.svg",
      "description": "youtubetv from Simple Icons",
      "source": "https://github.com/simple-icons/simple-icons/blob/master/icons/youtubetv.svg"
    },
    {
      "url": "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/youtubekids.svg",
      "description": "youtubekids from Simple Icons",
      "source": "https://github.com/simple-icons/simple-icons/blob/master/icons/youtubekids.svg"
    },
    {
      "url": "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/youtubemusic.svg",
      "description": "youtubemusic from Simple Icons",
      "source": "https://github.com/simple-icons/simple-icons/blob/master/icons/youtubemusic.svg"
    },
    {
      "url": "https://raw.githubusercontent.com/uditkumar489/Icon-pack/master/Social media/Die cut - transparent/svg/001-youtube.svg",
      "description": "youtube from uditkumar489",
      "source": "https://github.com/uditkumar489/Icon-pack/blob/master/Social media/Die cut - transparent/svg/001-youtube.svg"
    },
    {
      "url": "https://vectorwiki.com/images/FXDo9__youtube.svg",
      "description": "YouTube from Vector Wiki",
      "source": "https://vectorwiki.com/logo/youtube-3"
    },
    {
      "url": "https://vectorwiki.com/images/jDtJb__youtube.svg",
      "description": "YouTube from Vector Wiki",
      "source": "https://vectorwiki.com/logo/youtube-2"
    }]
  "message": null,
  "success": true,
  "query": "youtube",
  "more": true
}
*/