import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const HEIGHT = Dimensions.get('window').height
export const WIDTH = Dimensions.get('window').width
export const formatDateTime = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  let period = 'AM';

  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${period}`;

  return `${formattedDate} ${formattedTime}`;
}

export const DatePick = ({ title, onPress, placeholder, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={{
      backgroundColor: 'white', height: 45, alignSelf: 'flex-start', borderRadius: 10, justifyContent: 'space-between', paddingHorizontal: 10, paddingRight: 50, marginBottom: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 2,
      borderColor: 'rgb(146, 35, 35)',
    }}>
      <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  )
}


export const InputTitle = ({ title }) => {
  return (
    <View style={{ alignSelf: 'flex-start' }}>
      <Text style={{
        fontSize: 15,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        marginBottom: 2,
      }}> {title}</Text>
    </View>
  )
}

export const numberToWords = (num) => {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const thousands = ['', 'Thousand'];

  if (num === 0) return 'Zero';

  let word = '';
  if (num >= 1000) {
    word += ones[Math.floor(num / 1000)] + ' ' + thousands[1] + ' ';
    num %= 1000;
  }

  if (num >= 100) {
    word += ones[Math.floor(num / 100)] + ' Hundred ';
    num %= 100;
  }

  if (num >= 20) {
    word += tens[Math.floor(num / 10)] + ' ';
    num %= 10;
  }

  if (num > 0) {
    word += ones[num];
  }

  return word.trim();
}
// export const numberToWords = (num) => {
//   const ones = ['', 'એક', 'બે', 'ત્રીજ', 'ચાર', 'પાંચ', 'છ', 'સાત', 'આઠ', 'નવ', 'દસ', 'અગિયાર', 'બાર', 'તેર', 'ચૌદ', 'પંદર', 'સોળ', 'સતર', 'અઢાર', 'ઓગણીસ', 'વીસ'];
//   const tens = ['', '', 'વિસ', 'ત્રીસ', 'ચાલીસ', 'પચાસ', 'સાઠ', 'સિતેર', 'એંસી', 'નેવુ'];
//   const thousands = ['', 'હજાર'];

//   if (num === 0) return 'શૂન્ય';

//   let word = '';
//   if (num >= 1000) {
//     word += ones[Math.floor(num / 1000)] + ' ' + thousands[1] + ' ';
//     num %= 1000;
//   }

//   if (num >= 100) {
//     word += ones[Math.floor(num / 100)] + ' સો ';
//     num %= 100;
//   }

//   if (num >= 20) {
//     word += tens[Math.floor(num / 10)] + ' ';
//     num %= 10;
//   }

//   if (num > 0) {
//     word += ones[num];
//   }

//   return word.trim();
// }

export const ButtonComp = ({ onPress, title, style, textStyle, Total }) => {
  return (
    <TouchableOpacity style={[styles.button, style, { justifyContent: Total ? 'space-between' : 'center' }]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      <Text style={[styles.buttonText, textStyle]}>{Total}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(146, 35, 35)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45, flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
