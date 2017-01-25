package com.example.sofie.fiket;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.app.Activity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;
import android.view.View;
import android.view.View.OnClickListener;


public class MainCoffee extends Activity {

    Button imageButton1, imageButton2, imageButton3;
    final Context context = this;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_coffee);

            View.OnClickListener buttonListener =  new View.OnClickListener(){

            public void onClick(View v)
            {
                if(v.getId() == R.id.imageButton1)
                {

                    //Dialogruta
                    AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(context);
                    //alertDialogBuilder.setTitle("Är du helt hundra på detta?");

                    alertDialogBuilder
                            .setMessage("Vill du köpa kaffe?")
                            .setCancelable(false)
                            .setPositiveButton("Nej",new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog,int id) {
                                    // if this button is clicked, close
                                   // MainCoffee.this.finish();
                                    dialog.cancel();
                                }
                            })
                            .setNegativeButton("Ja",new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog,int id) {
                                    // if this button is clicked, just close
                                    // the dialog box and do nothing
                                    imageButton1.setOnClickListener(null);
                                    imageButton1.setBackgroundResource(R.drawable.kaffenej);
                                    dialog.cancel();
                                }
                            });

                    // create alert dialog
                    AlertDialog alertDialog = alertDialogBuilder.create();

                    // show it
                    alertDialog.show();

                    Toast.makeText(MainCoffee.this,
                            "ImageButton is clicked!",
                            Toast.LENGTH_SHORT).show();


                }

                if(v.getId() == R.id.imageButton2)
                {

                    //Dialogruta
                    AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(context);
                    //alertDialogBuilder.setTitle("Är du helt hundra på detta?");

                    alertDialogBuilder
                            .setMessage("Vill du köpa kaffe?")
                            .setCancelable(false)
                            .setPositiveButton("Nej",new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog,int id) {
                                    // if this button is clicked, close
                                    // MainCoffee.this.finish();
                                    dialog.cancel();
                                }
                            })
                            .setNegativeButton("Ja",new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog,int id) {
                                    // if this button is clicked, just close
                                    // the dialog box and do nothing
                                    imageButton2.setOnClickListener(null);
                                    imageButton2.setBackgroundResource(R.drawable.kaffenej);
                                    dialog.cancel();
                                }
                            }

                            );

                    // create alert dialog
                    AlertDialog alertDialog = alertDialogBuilder.create();

                    // show it
                    alertDialog.show();

                    Toast.makeText(MainCoffee.this,
                            "ImageButton is clicked!",
                            Toast.LENGTH_SHORT).show();
                }
                if(v.getId() == R.id.imageButton3)
                {
                    //Dialogruta
                    AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(context);
                    //alertDialogBuilder.setTitle("Är du helt hundra på detta?");

                    alertDialogBuilder
                            .setMessage("Vill du köpa kaffe?")
                            .setCancelable(false)
                            .setPositiveButton("Nej",new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog,int id) {
                                    // if this button is clicked, close
                                    // MainCoffee.this.finish();
                                    dialog.cancel();
                                }
                            })
                            .setNegativeButton("Ja",new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dialog,int id) {
                                    // if this button is clicked, just close
                                    // the dialog box and do nothing
                                    imageButton3.setOnClickListener(null);
                                    imageButton3.setBackgroundResource(R.drawable.kaffenej);
                                    dialog.cancel();
                                }
                            });

                    // create alert dialog
                    AlertDialog alertDialog = alertDialogBuilder.create();

                    // show it
                    alertDialog.show();

                    Toast.makeText(MainCoffee.this,
                            "ImageButton is clicked!",
                            Toast.LENGTH_SHORT).show();
                }

            }
        };

        imageButton1 = (Button) findViewById(R.id.imageButton1);
        imageButton2 = (Button) findViewById(R.id.imageButton2);
        imageButton3 = (Button) findViewById(R.id.imageButton3);

        imageButton1.setOnClickListener(buttonListener);
        imageButton2.setOnClickListener(buttonListener);
        imageButton3.setOnClickListener(buttonListener);

    }



}

