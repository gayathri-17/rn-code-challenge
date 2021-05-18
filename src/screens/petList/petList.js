import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import NavKeys from '../../constants/navKeys';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as actions from '../../reducer/types'
import styles from './petListStyle'
import defaultStrings from '../../constants/defaultStrings'


const PetList = () => {
	const navigation = useNavigation();
	const stateData = useSelector(state => state)
	const cartItems = stateData.user && stateData.user.list ? stateData.user.list : []
	const dispatch = useDispatch()

	/**
	 * remove the object from redux
	 * @param {object} item 
	 */
	const removeItemFromCart = (item) => {
		dispatch({
			type: actions.REMOVE_FROM_CART,
			payload: item
		})
	}

	/**
	 * render list view
	 * @param {object} item 
	 */
	const _renderItem = (item) => {
		return (
			<View style={styles.row}>
				<TouchableOpacity>
					<View style={styles.avatarView}>
						<Image source={{ uri: item.image }} style={styles.pic} />
						<View>
							<View style={styles.nameContainer}>
								<Text style={styles.nameTxt}>{item.petName}</Text>
							</View>
							<View style={styles.end}>
								<Text style={styles.breedTxt}>{item.breed}</Text>
							</View>
						</View>
					</View>
				</TouchableOpacity>
				<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => navigation.navigate(NavKeys.CREATELIST, {item})}>
					<AntDesign style={styles.editIcon} name="edit" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => removeItemFromCart(item)}>
					<AntDesign style={styles.deleteIcon} name="closecircleo" />
				</TouchableOpacity>
				</View>
			</View>
		)
	}

	/**
	 * render empty list view 
	 */
	const _renderEmptyItem = () => {
		return (
			<View style={styles.emptyView}>
				<Text style={styles.emptyText}>{defaultStrings.EMPTY_LIST}</Text>
			</View>
		)
	}

	/* main  UI view   */
	return (
		<SafeAreaView style={styles.mainContainer}>
			
			{/* list view */}
			<FlatList
				data={cartItems}
				renderItem={({ item, index }) => _renderItem(item)}
				ListEmptyComponent={() => _renderEmptyItem()}
				ItemSeparatorComponent={() => (<View
					style={styles.lineStyle}
				/>)}
				onEndReachedThreshold={0.01}
				keyExtractor={(item, index) => index.toString()}
			/>

			{/* fab button view */}
			<View style={styles.bottomView}>
				<TouchableOpacity
					onPress={() => navigation.navigate(NavKeys.CREATELIST)}
					style={styles.touchableOpacityStyle}>
					<View style={styles.fabView}>
						<AntDesign style={styles.floatingButtonStyle} name="plus" />
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default PetList