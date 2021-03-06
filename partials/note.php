
<?php
require_once '../application.php';
	
	if (isset($_GET['noteId']) && $_GET['noteId'] != "") {
		$note = Notes::find($_GET['noteId']);
	}else{
		$note = Notes::findOneNote();
		if (!$note) {
			$note = new Notes;
			$note->newExampleNote();
			$note = Notes::findOneNote();
		}
	}
?>
	<div class="note">
		<h2 class="title"> <?php echo $note->title; ?></h2>
		<p class="timestamp"><?php echo $note->timestamp; ?></p>
		<article class="content">
			<p class="noteContent"> <?php echo $note->content; ?>.</p>
			<a class="remove smallBtn" data-id="<?php echo $note->id ?>">Remove</a>
			<a class="edit smallBtn" data-id="<?php echo $note->id; ?>">Edit</a>
		</article>
	</div>