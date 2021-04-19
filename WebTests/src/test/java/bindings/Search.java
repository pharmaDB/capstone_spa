package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class Search {

    //names for web elements that are used in the tests
    private enum WebElementId {
        SearchField,
        SearchResultText,
        ActiveIngredientsLink,
        NDANumberLink,
        NameLink,
        ManufacturerLink,
        DrugDetailListResult,
        DrugDetailListViewButton,
        DrugDetailPageTitleLabel,
    }


    //mapping of web elements to the html id tag
    private final HashMap<WebElementId, String> webElements =  new HashMap<WebElementId, String>() {{
        put(WebElementId.SearchField, "atdYsOfMSP");
        put(WebElementId.SearchResultText, "atiYG2MUSc");
        put(WebElementId.ActiveIngredientsLink, "atY2kK4KuC");
        put(WebElementId.NDANumberLink, "atY2kK4KuC");
        put(WebElementId.NameLink, "atY2kK4KuC");
        put(WebElementId.ManufacturerLink, "atY2kK4KuC");
        put(WebElementId.DrugDetailListResult, "atxAiOfZWmd2");
        put(WebElementId.DrugDetailListViewButton, "atHh0sP8uJ");
        put(WebElementId.DrugDetailPageTitleLabel, "atxMt5NQIk");
    }};


    //the features sometime need to find an element based on the text of a web element
    //this maps text to a named web element
    private final HashMap<String, WebElementId> webElementsByText = new HashMap<String, WebElementId>() {{
        put("ACTIVE INGREDIENTS", WebElementId.ActiveIngredientsLink);
        put("NDA NUMBER", WebElementId.NDANumberLink);
        put("NAME", WebElementId.NameLink);
        put("MANUFACTURER", WebElementId.ManufacturerLink);
    }};


    //driver for the web browser
    private SafariDriver driver;

    //base url for the site being tested
    private static final String rootURL = "https://pharmadb.org/search";

    //time to wait for things to load
    private static final int sleepSeconds = 3;




    /**
     * Starting point for most if not tests.  Creates the webDriver and opens the browser to the home page
     * */
    @Given("^that i am on the pharma website$")
    public void startOnHomePage() {
        driver = new SafariDriver();
        driver.manage().timeouts().implicitlyWait(sleepSeconds, TimeUnit.SECONDS);
        driver.manage().window().setSize(new Dimension(1200, 900));
        driver.manage().window().setPosition(new Point(0,0));
        driver.get(rootURL);
    }



    /**
     * Looks for an element on the page based on the supplied text.  The text
     * must be mapped in the member var webElementsByText
     *
     * @param labelText Text to search for
     * */
    @When("^i should have (.*) element on the screen$")
    public void testForElementByText(String labelText) throws Throwable {

        WebElement element = findSearchTypeButtonByLabel(labelText);

        assertNotNull("Search Type not found.", element);
    }



    /**
     * Enters text into the search box.
     *
     * @param searchTerm    Text to enter into the search box
     * */
    @When("^i enter (.*) into the search box$")
    public void enterSearchTerm(String searchTerm) throws Throwable {

        //find the search box
        WebElement searchBox = findElementById(WebElementId.SearchField);

        //text the search box was found
        assertNotNull("Search box not found", searchBox);

        //enter supplied text and press enter
        searchBox.sendKeys(searchTerm);
    }



    /**
     * Click the specified search type on the page.
     *
     * @param labelText The text displayed on the page for the desired Search Type
     * */
    @When("^i search by (.*)$")
    public void setSearchType(String labelText) throws Throwable {

        WebElement element = findSearchTypeButtonByLabel(labelText);

        assertNotNull("Search Type not found.", element);

        element.click();
    }



    /**
     * Checks to see if the number of items found in a search is teh expeced amount
     *
     * @param itemCount Number of items returned by the search
     * */
    @Then("^i should have (.*) items$")
    public void checkSearchResultItemCount(String itemCount) throws Throwable {

        //we have to pause a bit to get results back
        //because the text element is already on the screen with 0 results
        //if we don't pause, we will find the element with the 0 and the item count check will fail
        Thread.sleep(sleepSeconds * 1000);


        WebElement searchResultText = findElementById(WebElementId.SearchResultText);

        assertNotNull("Search results text not found", searchResultText);

        assertTrue(searchResultText.getText().contains(itemCount));
    }



    /**
     * Finds teh "view" button for the given NDA and clicks it.
     *
     * @param nda NDA number click the view button for
     * */
    @Then("^i click view for NDA (.*)$")
    public void clickView(String nda) throws Throwable {

      List<WebElement> elements = findElementsById(WebElementId.DrugDetailListResult);

      assertNotNull("Did not find search results", elements);

      for (WebElement element : elements) {
        String text = element.getText();

        if (text.contains(nda)) {
          WebElement viewButton = element.findElement(By.id(webElements.get(WebElementId.DrugDetailListViewButton)));

          assertNotNull("Could not find view button", viewButton);

          viewButton.click();
          return;
        }
      }
    }


    @Then("^i see the drug name (.*)$")
    public void findDrugNameAsPage(String drugName) throws Throwable {

      WebElement label = findElementById(WebElementId.DrugDetailPageTitleLabel);

      assertNotNull("Could not find drug label", label);

      assertTrue("Drug name is wrong", label.getText().toUpperCase().equals(drugName));
    }



    /**
     * Quits the driver.  Should be the last step in the tests.
     * */
    @Then("^quit$")
    public void quit() {
        //this is the last step in this feature, shut down the driver
        driver.quit();
    }



    /**
     * Finds and returns a WebElement on the current page by id.
     *
     * @param elementId     id of the element to find
     * @return              found WebElement or null
     * */
    private WebElement findElementById(WebElementId elementId) {
        WebDriverWait wait = new WebDriverWait(driver, sleepSeconds);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(webElements.get(elementId))));
    }



    /**
     * Finds and returns a WebElement on the current page by id.
     *
     * @param elementId     id of the element to find
     * @return              found List of WebElements or null
     * */
    private List<WebElement> findElementsById(WebElementId elementId) {

        WebDriverWait wait = new WebDriverWait(driver, sleepSeconds);
        return wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id(webElements.get(elementId))));
    }



    /**
     * Finds the search type link on the page based on the element's text
     *
     * @param label Text of the link
     * @return      WebElement of the search type link of null
     * */
    private WebElement findSearchTypeButtonByLabel(String label) throws Throwable {

        //get the id for this text
        WebElementId elementId = webElementsByText.get(label);

        assertNotNull("Could not find search type", elementId);

        //get all the elements with the search type id, there are several
        List<WebElement> elements = findElementsById(elementId);

        //look at the text for the label we want
        for (WebElement element : elements) {

            String text = element.getText().toUpperCase();

            if (text.equals(label)) {
                return element;
            }
        }

        return null;
    }

} // end class
