package com.example.sofie.fiket;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.view.View.OnClickListener;
import android.view.View;


public class MainActivity extends Activity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        addListenerOnButton();
    }

    Button button;

    public void addListenerOnButton() {

        final Context context = this;

        View.OnClickListener buttonListener =  new View.OnClickListener() {

            public void onClick(View v) {

                if (v.getId() == R.id.buttonGoNext) {

                    Intent intent = new Intent(context, MainCoffee.class);
                    startActivity(intent);
                }
            }
        };

     button = (Button)findViewById (R.id.buttonGoNext);
     button.setOnClickListener(buttonListener);
    };



    }

