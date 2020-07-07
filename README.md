# restaurant-recommender

This recommends a restaurant based on the user interests and location. It allows for searches by location and by food preferences and gets the results via the Yelp Fusion API. The results are displayed with the Google Maps API. To run the code for yourself, pull and then install the dependencies from the package.json file (which can be done using "npm install").  The app is deployed at:

stark-peak-26457.herokuapp.com

* To use the website:
    * Select one of three options of searching
    * To use your location:
        * Click the 'Enable Location' button in the box labeled 'Your Location'
        * (Optional) Enter any food preferences in the text box within the same box
        * Click the 'Access Recommendations' button
    * To use a custom location:
        * Enter the latitute and longitude of the location in the box labeled 'Custom Coordinates'
        * (Optional) Enter and food preferences in the text box within the same box
        * Click the 'Submit' button in the box
    * To use a custom search query:
        * Enter a location to be searched in the text area within the box 'Custom Search Query'
        * (Optional) Enter any food preferences in the text box within the same box
        * Click the 'Submit' button in the box
    * Once the recommendations are accessed:
        * If another request is desired, click the 'Not Satisfied? Click to Get Another Recommendation' button
        * If another search is desired, click the 'Return Home' button to repeat the process
    
