function getElementsByClassName(node,classname)
{
	if (node.getElementsByClassName){
		return node.getElementsByClassName(classname);
	}else{
		var result = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i=0; i<elems.length; i++){
			if (elems[i].classname.indexOf(classname) != -1){
				result[result.length] = elems[i];
			}
		}
		return result;
	}
}