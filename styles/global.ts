import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
    card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 6,
    elevation: 2,
    borderColor: "#ccc",
    shadowColor: "#ccc",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    alignSelf: "center",
    marginHorizontal: 40,
    marginTop: 30,
  },
    buttonSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20
  },
  numberConfirm: {
    borderColor: "#f4511e",
    borderWidth: 5,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 15,
  },
})



 export const colors = {
    primaryColor: "#4a148c",
    accentColor: "#ff6f00"
  }