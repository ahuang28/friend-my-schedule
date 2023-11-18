from bs4 import BeautifulSoup
import csv
from pathlib import Path 

def main(): 
    """Converts the HTML table to a CSV file.
    """
    with open(Path(__file__).parent.parent / Path("data/data.html"), "r") as f:
        data = f.read()
    
    soup = BeautifulSoup(data, "html.parser")
    
    table = soup.find('table', class_='datadisplaytable')
    
    if table:
        # Extract table data
        rows = table.find_all('tr')
    
        # Create a CSV file
        csv_filename = Path(__file__).parent.parent / Path('data/output.csv')
        with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
            csv_writer = csv.writer(csvfile)
        
            # Write header row
            header_row = [header.get_text(strip=True) for header in rows[1].find_all('th')]
            csv_writer.writerow(header_row)
        
            # Write data rows
            for row in rows[2:]:
                data_row = [cell.get_text(strip=True).replace('\n', '')  for cell in row.find_all('td')]
                csv_writer.writerow(data_row)
    
        print(f'Table data has been exported to {csv_filename}')
    else:
        print("No table found in the HTML file.")


if __name__ == '__main__':
    main()
