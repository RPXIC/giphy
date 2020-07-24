import React from 'react'
import ContentLoader from 'react-content-loader' 
import './Spinner.sass'

const MyLoader = () => (
  <ContentLoader className="spinner"
    speed={2}
    viewBox="0 0 347 90"
    backgroundColor="#343434"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
    <rect x="183" y="70" rx="3" ry="3" width="40" height="12" /> 
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" /> 
    <rect x="-1" y="71" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
)

export default MyLoader