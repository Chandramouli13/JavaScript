
//  We have this Storages inside the Application of the browser  
//  Inside means go to rightClick & Inspect > "Application" or click this(>>) arrows 

localStorage
sessionStorage
cookies


localStorage
    > Persistent Storage
    > It save  w.r.t to browser
    > We have to remove it manually

//  We have three items in the localStorage :
  > setItem   =  // Able to save the data
        setItem('key','value')

  > getItem   =  // Able to get the data
         getItem('key') // and output get the value of the key

  > removeItem  = // Able to remove the data
        removeItem('key') // and output remove the value of the key
        
//  Examples  /// Saved inside localStorage
localStorage.setItem('username','testuser')
undefined

localStorage.setItem('usertoken','gwefugiw67236wbf')
undefined

localStorage.getItem('username')
'testuser'

localStorage.getItem('usertoken')
'gwefugiw67236wbf'

localStorage.getItem('usertoken1')   ///  if it not set > null
null

// <!-- It is still there in localStorage after we closed the browser/tab/window = Persistent -->
// <!-- usertoken won't be removed after closing the browser -->
localStorage.getItem('usertoken')
'gwefugiw67236wbf'

// <!-- we have to remove it manually by this removeItem() -->
localStorage.removeItem('usertoken')
undefined
// <!-- Output remove the value of the usertoken -->
localStorage.getItem('usertoken')
null
// <!-- Also removed inside the localStorage -->

// Anything we want to save data we use localStorage for persistent 
// It won't remove the data until we manually remove it.
//////////////////////////////////////////////////////////////////


sessionStorage
    > Temporary storage
    > Save w.r.t to website
    > Remove as soon as close the tab

// <!-- Examples -->
sessionStorage.setItem('city','Hyderabad')
undefined

sessionStorage.getItem('city')
'Hyderabad'

sessionStorage.removeItem('city')
undefined

sessionStorage.getItem('city')
null

sessionStorage.setItem('city','Hyderabad')
undefined


// Anything we want to save data w.r.t website for Temporary we use sessionStorage 
// It will remove the data when we close the browser.
//////////////////////////////////////////////////////////////////


Cookies
    > Save w.r.t to the website
    > Has an expiry time that will delete automatically
    > Save with expiry or without expiry

// <!-- Examples -->
// To see cookie in any website we use "document.cookie" in console
// To save at particular time we use Cookies

document.cookie
> '_ga=GA1.2.1783311611.1663756666; _gauges_unique_hour=1; _gauges_unique_day=1; _gauges_unique_month=1; _gauges_unique_year=1;

// <!-- Cookie we created for the particular website & it expiries tomorrow by given expiry time -->
document.cookie = "city=delhi; expires=Thu, 24 Nov 12:00:00 UTC"
'city=delhi; expires=Thu, 24 Nov 12:00:00 UTC'

// <!-- so, cookie added here in that website & it is temporary for expiration time and it automatically deletes tomorrow at 12:00:00-->
document.cookie
'city=delhi; _ga=GA1.2.1783311611.1663756666; _gauges_unique_hour=1; _gauges_unique_day=1; _gauges_unique_month=1; _gauges_unique_year=1; _gauges_unique=1; PHPSESSID=7f070193403940a82802e02ea737b618'