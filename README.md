# ITIMS Template
npm install
npm install -g nodemon
nodemon

## Install Mongo
brew tap mongodb/brew
brew install mongodb-community
sudo mkdir -p /System/Volumes/Data/data/db
sudo chown -R `id -un` /System/Volumes/Data/data/db
brew services run mongodb-community

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