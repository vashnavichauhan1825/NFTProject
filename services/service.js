import axios from 'axios';

const API_TOKEN = 'cqt_rQ4rjPvbKdDRJCTVHyDWxdhH4hPp';
const CONTRACT_ADDRESS = '0x8821bee2ba0df28761afff119d66390d594cd280';

export const fetchNFTs = async (page = 0, pageSize = 10) => {
  const url = `https://api.covalenthq.com/v1/eth-mainnet/nft/${CONTRACT_ADDRESS}/metadata/?page-size=${pageSize}&page-number=${page}`;
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: API_TOKEN,
      password: '',
    },
  });

  const items = response.data.data.items;
  console.log('data', items[0]);
  return items.map(item => ({
    contract_address: item.contract_address,
    contract_name: item.contract_name,
    nft_data: {
      token_id: item.nft_data.token_id,
      current_owner: item.nft_data.current_owner,
      external_data: {
        name: item.nft_data.external_data.name,
        image: item.nft_data.external_data.image,
      },
    },
  }));
};
