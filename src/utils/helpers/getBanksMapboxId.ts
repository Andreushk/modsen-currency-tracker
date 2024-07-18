import { ISuggestion } from '@/types/api/response';

function getBanksMapboxId(suggestions: ISuggestion[]): string {
  let banksMapboxId: string = '';

  for (let i = 0; i < suggestions.length; ) {
    if (suggestions[i].feature_type === 'category' && suggestions[i].name === 'Bank') {
      banksMapboxId = suggestions[i].mapbox_id;
      break;
    }
    i += 1;
  }

  return banksMapboxId;
}

export default getBanksMapboxId;
