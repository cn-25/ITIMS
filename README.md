# ITIMS
An Open-Source Inventory Management System for small businesses. An ideal replacement for tracking assets with excel!
## Key Features:
* Historical records for each asset, which is useful for tracking the lifecyle of the device
* Various metrics to measure the value of your inventory
* Export data to CSV

## Roadmap Features to add:
* Add authentication/SSO
* Add more asset types & variables (serial numbers, etc.)


# Setup (MacOS)
## Install & run Mongodb
* brew tap mongodb/brew
* brew install mongodb-community
* sudo mkdir -p /System/Volumes/Data/data/db
* sudo chown -R `id -un` /System/Volumes/Data/data/db
* brew services run mongodb-community

## Install dependencies & run
* npm install
* npm install -g nodemon
* nodemon

# Features
### Adding an Asset
![Add Asset](/README_img/add_asset.png)

### Adding an Asset
![Add History](/README_img/asset_history.png)
To maintain a historical record of the asset's owners

### Show Assets
![Show Assets](/README_img/show_assets.png)

### Show Metrics
![Show Metrics](/README_img/show_metrics.png)

### Export to CSV
![Export to CSV](/README_img/export_to_csv.png)
