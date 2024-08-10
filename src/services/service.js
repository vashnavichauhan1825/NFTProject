import axios from 'axios';
import {API_TOKEN, CONTRACT_ADDRESS, BASE_URL} from '@env';

export const fetchNFTs = async (page = 0, pageSize = 10) => {
  const url = `${BASE_URL}/v1/eth-mainnet/nft/${CONTRACT_ADDRESS}/metadata/?page-size=${pageSize}&page-number=${page}`;
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: API_TOKEN,
    },
  });

  const items = response.data.data.items;
  return items.map(item => ({
    contract_address: item.contract_address,
    contract_name: item.contract_name,
    nft_data: {
      token_id: item.nft_data.token_id,
      current_owner: item.nft_data.current_owner,
      external_data: {
        name: item.nft_data.external_data.name,
        image: item.nft_data.external_data.image,
        description: item.nft_data.external_data.description,
        assetType: item.nft_data.external_data.asset_file_extension,
        assetSize: item.nft_data.external_data.asset_size_bytes,
        externalURL: item.nft_data.external_data.external_url,
      },
    },
  }));
};
