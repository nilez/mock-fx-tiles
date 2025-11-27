package com.example.websocket;

import org.springframework.web.socket.BinaryMessage;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class PricingService extends TextWebSocketHandler {
    List<String> currencyPairs = List.of("EUR/USD", "GBP/USD","USD/JPY","AUD/USD","USD/CAD", "NZD/USD","EUR/INR", "GBP/INR", "USD/ZAR","AUD/ZAR","USD/THB", "NZD/THB");
    private ScheduledExecutorService executor;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        executor = Executors.newSingleThreadScheduledExecutor();
        Random random = new Random();
        executor.scheduleAtFixedRate(() -> {
            try {
                if (session.isOpen()) {
                    String randomPair = currencyPairs.get(random.nextInt(currencyPairs.size()));
                    String tenor = "SPOT";
                    if (randomPair.equals("AUD/USD")) {
                        tenor = "1M";
                    }
                    if (randomPair.equals("USD/CAD")) {
                        tenor = "3M";
                    }

                    Price.Builder builder = Price.newBuilder().setCurrencyPair(randomPair).setTenor(tenor);

                    for (int i = 0; i < 4; i++) {
                        String price = String.format("1.00%03d", random.nextInt(1000));
                        builder.addQuotes(Quote.newBuilder().setSide(i % 2 == 0 ? Side.BID : Side.ASK)
                                .setQuoteId("Q" + random.nextInt(10000))
                                .setPrice(price)
                                .setGoodForAmount("100")
                                .build());
                    }
                    Price price = builder.setTimestamp(System.currentTimeMillis()).build();

                    session.sendMessage(new BinaryMessage(price.toByteArray()));
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }, 0, 20, TimeUnit.MILLISECONDS);
        super.afterConnectionEstablished(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        executor.shutdown();
        super.afterConnectionClosed(session, status);
    }
}
