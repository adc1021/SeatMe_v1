# SeatMe

## Introduction

Welcome to the official README for the OpenTable clone, SeatMe! SeatMe is a full stack web application built with Ruby on Rails and React.js. I decided to clone OpenTable out of my love for cooking and the bustling dining scene in NYC. User's have the ability to scan through a range of different restaurants.
Restaurants can be saved to users profile. Reservations can be scheduled, updated, and deleted. Reviews can also be left for each location. 

## Technologies

- Languages: JavaScript, Ruby, HTML5, CSS3
- Database: PostgreSQL
- Backend: Ruby on Rails
- Frontend: React/Redux
- Hosting: Render
- Other technologies: AWS S3, Pure React Carousel 

## Features 

1. **User Authentication**

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/111291271/212965477-955718a6-555c-44e0-a6fd-2ebcc05f7fe2.gif)

2. **Restaurant Reservations**

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/111291271/212984156-d74ee6b2-92d9-47ac-9255-3846934fe5dc.gif)

3. **Leaving Comments**

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/111291271/212985670-02f561f1-59b4-4432-8940-c710910deabe.gif)


## Code Snippets

- To persist save pendant as filled/unfilled, I utilized of a custom rails controller action and redux thunk action

``` JavaScript

  const savedRestaurant = useSelector((state) => {
    return state.savedRestaurants[id] ? state.savedRestaurants[id] : null;
  });

  useEffect(() => {
    dispatch(savedRestActions.fetchSavedRestaurant(user.id, id));
    dispatch(fetchRest(id));
  }, [dispatch, id, user.id]);


  const saveTag = savedRestaurant ? (
    <>
      <img
        alt=""
        id="save-svg"
        src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark_selected-b86940.svg" // red
        ></img>
      <div id="text-div">Restaurant saved!</div>
    </>
  ) : (
    <>
      <img
        alt=""
        id="save-svg"
        src="https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg"
        //white
      ></img>
      <div id="text-div">Save this restaurant</div>
    </>
  );
  ```
  
  ``` JavaScript 
  export const fetchSavedRestaurant = (userId, restaurantId) => async (dispatch) => {
  try {
    const savedRestaurant = await csrfFetch(
      `/api/users/${userId}/saved_restaurant/${restaurantId}`
    );
    const data = await savedRestaurant.json();
    dispatch(receiveSavedRestaurant(data));
  } catch (err) {
    console.log(err);
  }
};
```

``` Ruby
 def show
        user = User.find_by(id: params[:user_id])
        saved_restaurants = user.saved_restaurants

        if(saved_restaurants.length > 0)
            arr = saved_restaurants.select do |restaurant|
                restaurant.restaurant_id == params[:id].to_i
            end

            if(arr.length == 1)
                @saved_restaurant = arr[0]
            end
        end
    end
```

  
