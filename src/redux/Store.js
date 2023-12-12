import {configureStore} from '@reduxjs/toolkit'
import SlicesCard from './slices/SlicesCard'

const store = configureStore({
    reducer:{
        cart: SlicesCard,
    }
})

export default store