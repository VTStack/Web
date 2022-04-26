nx build about
aws s3 sync ./dist/apps/about s3://app-about --delete
sh ./scripts/utils/remove-dists.sh