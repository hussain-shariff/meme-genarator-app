# Tools - REACT, HOOKS, CSS, JS, 

THSI IS A RANDOM MEME GENERATOR APP CREATED USING REACT AND IMGFLIP API

## live - https://memes-react-app.netlify.app/

# Imgflip API

## URL: https://api.imgflip.com/get_memes

/get_memes:

Gets an array of popular memes that may be captioned with this API. The size of this array and the order of memes may change at any time. When this description was written, it returned 100 memes ordered by how many times they were captioned in the last 30 days.


Example Success Response:
box_count is the default number of boxes each meme uses. some memes have many text boxes

{
   "success": true,
   "data": {
      "memes": [
         {
            "id": "61579",
            "name": "One Does Not Simply",
            "url": "https://i.imgflip.com/1bij.jpg",
            "width": 568,
            "height": 335,
            "box_count": 2
         },
         {
            "id": "101470",
            "name": "Ancient Aliens",
            "url": "https://i.imgflip.com/26am.jpg",
            "width": 500,
            "height": 437,
            "box_count": 2
         }
         // probably a lot more memes here..
      ]
   }
}
