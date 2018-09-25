<?php
		$file = file_get_contents('polls.json');     // Открыть файл polls.json
//		echo $file;
		$pollList = json_decode($file);              // Декодировать в массив
		if (count($_POST) > 0) {
			foreach ( $pollList->museums  as $museum){   // Найти в массиве
			if($_POST['museums'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->sights  as $museum){   // Найти в массиве
			if($_POST['sights'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->theatres  as $museum){   // Найти в массиве
			if($_POST['theatres'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->parks  as $museum){   // Найти в массиве
			if($_POST['parks'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->food1  as $museum){   // Найти в массиве
			if($_POST['food1'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->food2  as $museum){   // Найти в массиве
			if($_POST['food2'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->food3  as $museum){   // Найти в массиве
			if($_POST['food3'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->food4  as $museum){   // Найти в массиве
			if($_POST['food4'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->food5  as $museum){   // Найти в массиве
			if($_POST['food5'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		foreach ( $pollList->food6  as $museum){   // Найти в массиве
			if($_POST['food6'] == $museum -> id){
				$museum -> counter ++;
			}
		};
		}

		$output = json_encode($pollList);
		file_put_contents('polls.json', $output); // Перекодировать в формат и записать в файл.
		echo $output;
?>
