import requests
from pathlib import Path
from bs4 import BeautifulSoup
import sys
from selenium import webdriver
from time import sleep as wait
from selenium.webdriver.common.by import By
from pyppeteer import launch
import asyncio

async def fetch_updated_dom(url):
    browser = await launch(headless=True)
    page = await browser.newPage()
    await page.goto(url)

    # Enable the Chrome DevTools Protocol
    cdp = await page.target.createCDPSession()

    # Wait for a specific selector to be present in the page
    wait(10)

    # Use CDP commands to evaluate JavaScript and get the crn_values
    crn_values = await cdp.send('Runtime.evaluate', {
        'expression': 'Array.from(document.querySelectorAll(".crn_value")).map(element => element.innerText)'
    })

    # Print the crn_values
    print(crn_values)

    # Close the headless browser
    await browser.close()
    
async def main():
    crn_list = []   
    if len(sys.argv) != 2:
        print("Usage: python vsb_scrape.py <link_to_vsb>")
        sys.exit(1)

    url = sys.argv[1]

    # Get the HTML content after the dynamic content has loaded
    html_content = await fetch_updated_dom(url)
    with open('vsb.html', 'w') as f:
        f.write(html_content)
    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract and print the text content of elements
    for element in soup.find_all('span', class_='crn_value'):
        print(element.text)

    # Close the headless browser
    # driver = webdriver.Chrome() 
    # driver.get(url)

    # Wait for the page to fully load (you might need to adjust the wait time)
    # driver.implicitly_wait(30)
    
    # Get the page source after the dynamic content has been loaded
    
    # crns = driver.find_elements(By.CLASS_NAME, "crn_value")
    
    
    # for crn in crns:
        
    #     crn_list.append(crn.text)
    
    
    


if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(main())