import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
import cv2
chrome_options = Options()
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(chrome_options=chrome_options)
driver.set_window_size(1820, 980)

def get_ss_by_url(url, filename):
    driver.get(url);
    time.sleep(1) # Let the user actually see something!
    show_graph = driver.find_element_by_xpath('/html/body/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[6]/td/table/tbody/tr/td/a[2]')
    show_graph.click()
    time.sleep(2)

    # driver.save_screenshot("whole1.png")
    driver.save_screenshot(filename)

    x = 454
    y = 68
    h = 595
    w = 892
    img = cv2.imread(filename)[y:y+h, x:x+w]

    cv2.imwrite(filename, img)

if __name__ == "__main__":
    url = "https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54100581"
    get_ss_by_url(url, "test.png")