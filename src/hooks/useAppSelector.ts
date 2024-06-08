import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootSate } from '@/store';

const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;

export default useAppSelector;
